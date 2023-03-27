
# Audiophile

A Social Media Like Music App for Artists, DJs, Producers, and even Listeners to share, listen, like, comment theirs and others music. Artists can promote their own music by encouraging fans to like their songs, albums, and playlists, to land a spot on the trending page.


## Authors

- [@Shadowfear36](https://www.github.com/Shadowfear36)


## Tech Stack

**Client:** React, HTML, Vanilla CSS

**Server:** Ruby, Rails, Google Cloud Services


## Documentation
Frontend Is Using JSDoc
Navigate to the Docs Folder ***/client/docs***
Open ***App.html*** To a Live Server To View A Static Site of Documentation.


## Demo

[Link To Watch Demo](https://www.awesomescreenshot.com/video/15979354?key=f4a97d14d2561ed762840dd30a24557e)


## Acknowledgements

This document presumes you meet these prerequisites

**Installations**
 - [Node JS v14.17^](https://nodejs.org/en/download/)
 - [Ruby 2.7.4](https://www.ruby-lang.org/en/downloads/)

 **API Keys & Resources**
- [Google Cloud Storage Service Key](https://m2msupport.net/m2msupport/generate-service-account-key-in-google-cloud-platform-gcp/)
- [Google Cloud Storage Bucket](https://cloud.google.com/storage/docs/creating-buckets)


## Getting Started

**Setting Up GCS (Google Cloud Service) Configs**

- Make a new file in the ***/config*** folder called ***gkey.json***
Place your ***GCS Service Key*** in ***/config/gkey.json.***

- In ***/config/storage.yml*** update it as follows:

```
test:
  service: Disk
  root: <%= Rails.root.join("tmp/storage") %>

local:
  service: Disk
  root: <%= Rails.root.join("storage") %>

google_dev:
  service: GCS
  project: <Enter Your Project ID>
  credentials: 'config/gkey.json'
  bucket: <Enter Your Bucket Name>

google:
  service: GCS
  project: <Enter Your Project ID>
  credentials: 'config/gkey.json'
  bucket: <Enter Your Bucket Name>
```



**Start Rails Api**

``
bundle install
``

``
rails db:migrate && rails db:seed
``

start on port :3000


**Start React UI**


``
cd ./client/audiophile
``

``
npm install
``

``
npm start
``

## Frontend Routes

| Route | Description     |
| :-------- | :------- |
| `/` | Login Page |
| `/signup` | Signup Page |
| `/create` | Create Songs, Albums, & Playlists & Upload them to the database and GCS |
| `/home` | Displays the trending Albums, Playlists, & Songs, based on most comments and likes |
| `/search` | Allows a user to search for other users by username or albums, songs, & playlists by name |
| `/music` | Displays a users Liked Music Items to allow for user to play and see what they have previously liked | 
| `/profile/:username` | Displays a User's Profile. Their songs, albums, & playlists. Users information is fetched by :username param|
| `/settings` | Allows a User to delete their account, upload a profile picture and also change profile information |
| `/song/:id` | Displays an individual song, comments and allows for users to leave comments |
| `/album/:id` | Displays an individual album, songs & comments. Allows for users to leave comments |
| `/playlist/:id` | Displays an individual playlist, songs & comments. Allows for users to leave comments |

## API Reference

### Users

#### Relationships
    has_many :playlist_songs
    has_many :poly_comments, as: :commentable
    has_many :poly_likes, as: :likeable
    has_one_attached :audio, service: :google
    has_one_attached :image, service: :google

#### Get all users

```http
  GET /users
```

#### Get Individual User

```http
  GET /users/:username
```


#### Post To Users
```http
  POST /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  User ID |
| `name` | `string` |  Users Name |
| `username` | `string` |  ***Required*** Users Username|
| `email` | `string` |  ***Required*** Users Email |
| `password` | `string` |  ***Required*** Users Password (hashed) |
| `gender` | `string` |  Users Gender: 'M', 'F', null |
| `age` | `integer` |  Users Age |
| `user_type` | `string` |  Users Type: 'DJ', 'Artist', 'Producer'|

#### Patch User
```http
  PATCH /users/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  User ID |
| `name` | `string` |  Users Name |
| `username` | `string` |  Users Username|
| `email` | `string` |  Users Email |
| `password` | `string` |  Users Password (hashed) |
| `gender` | `string` |  Users Gender: 'M', 'F', null |
| `age` | `integer` |  Users Age |
| `user_type` | `string` |  Users Type: 'DJ', 'Artist', 'Producer'|

#### Get users likes

```http
  GET /users/:id/likes
```
Returns the users song likes (Will eventually return albums, & playlists as well)

#### Delete User
```http
  DELETE /users/:id
```

### Songs

#### Relationships
    has_secure_password
    has_many :albums
    has_many :songs
    has_many :playlists
    has_many :poly_comments
    has_many :poly_likes
    has_many :liked_songs, through: :poly_likes, source: :likeable, source_type: 'Song'
    has_many :liked_albums, through: :poly_likes, source: :likeable, source_type: 'Album'
    has_many :liked_playlists, through: :poly_likes, source: :likeable, source_type: 'Playlist'

    

    has_one_attached :image, service: :google


#### Get all Songs

```http
  GET /songs
```
#### Get Individual Song

```http
  GET /songs/:id
```

#### Post Song

```http
  POST /songs
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  Song ID |
| `name` | `string` |  ***Required*** Song Name |
| `user_id` | `integer` |  ***Required*** Users ID (Poster)|
| `album_id` | `integer` | Songs Album ID|
| `image` | `file` | Songs Image |
| `audio` | `file` | Songs Audio |

#### Delete Song

```http
  Delete /songs/:id
```
### Albums

#### Relationships

    has_one :user
    has_many :songs
    has_many :poly_comments, as: :commentable
    has_many :poly_likes, as: :likeable
    has_one_attached :image, service: :google

#### Get all Albums

```http
  GET /albums
```

#### Get Individual Album

```http
  GET /albums/:id
```


#### Post To Albums
```http
  POST /albums
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  Album ID |
| `name` | `string` |  **Required** Albums Name |
| `user_id` | `integer` |  **Required** Users ID |
| `image` | `file` | Albums Image |

#### Delete Album

```http
  Delete /albums/:id
```

### Playlists

#### Relationships
    has_many :playlist_songs
    has_many :poly_comments, as: :commentable
    has_many :poly_likes, as: :likeable
    has_many :songs, through: :playlist_songs
    has_one_attached :image

#### Get all Playlists

```http
  GET /playlists
```

#### Get Individual Playlist

```http
  GET /playlists/:id
```


#### Post To Playlists
```http
  POST /playlists
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  Playlist ID |
| `name` | `string` |  **Required** Playlists Name |
| `user_id` | `integer` |  **Required** Users ID |
| `image` | `file` | Playlists Image |

#### Delete Playlist

```http
  Delete /playlists/:id
```

### Playlist Songs (Join Table)

#### Relationships

    belongs_to :playlist
    belongs_to :song

#### Get all Playlist Songs

```http
  GET /playlist_songs
```

#### Get Individual Playlist

```http
  GET /playlist_songs/:id
```


#### Post To Playlists
```http
  POST /playlist_songs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  Playlist Song ID |
| `playlist_id` | `integer` |  **Required** Playlists Id |
| `song_id` | `integer` |  **Required** Songs ID |

#### Delete Playlist

```http
  Delete /playlist_songs/:id
```


### Poly Likes (Polymorphic Likes Table)

#### Relationships

  belongs_to :user
  belongs_to :likeable, polymorphic: true

#### Get all likes

```http
  GET /poly_likes
```

#### Get Individual Like

```http
  GET /poly_likes/:id
```


#### Post To Likes
```http
  POST /poly_likes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  Poly Like ID |
| `likeable_type` | `varchar` |  **Required** Liked Items Type: "Album", "Song", "Playlist" |
| `likeable_id` | `integer` |  **Required** Liked Items ID |

#### Delete Like

```http
  Delete /poly_likes/:id
```

### Poly Comments (Polymorphic Comments Table)

#### Relationships
  belongs_to :user
  belongs_to :commentable, polymorphic: true

#### Get all comments

```http
  GET /poly_comments
```

#### Get Individual Comment

```http
  GET /poly_comments/:id
```


#### Post To Comments
```http
  POST /poly_comments
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  Poly Comment ID |
| `commentable_type` | `varchar` |  **Required** Liked Items Type: "Album", "Song", "Playlist" |
| `commentable_id` | `integer` |  **Required** Commented Items ID |
| `user_id` | `integer` |  **Required** Users ID |
| `content` | `text` |  **Required** Comments Text |

#### Delete Comment

```http
  Delete /poly_comments/:id
```

### Login/ Logout Sessions

#### Creates a Session

```http
  POST /login
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` |  Users Name |
| `username` | `string` |  ***Required*** Users Username|
| `email` | `string` |  ***Required*** Users Email |
| `password` | `string` |  ***Required*** Users Password |


#### Destroys a Session

```http
  POST /logout
```

### Search

#### Get search results

```http
  GET /search/:term
```

### Trending

#### Get Trending Results Based on Most Likes and Comments

```http
  GET /trending
```



