require "google/cloud/storage"

# Set up Google Cloud Storage client
storage = Google::Cloud::Storage.new(
  project_id: ENV["GOOGLE_CLOUD_PROJECT_ID"],
  credentials: ENV["GOOGLE_CLOUD_KEYFILE_JSON"]
)

# Set the default bucket name
bucket_name = ENV["GOOGLE_CLOUD_STORAGE_BUCKET"]
bucket = storage.bucket(bucket_name)

# Configure Active Storage to use Google Cloud Storage
config = Rails.application.config
config.active_storage.service = :google_cloud_storage
config.active_storage.service_config = {
  project_id: ENV["lexical-passkey-380701"],
  credentials: ENV["GOOGLE_CLOUD_KEYFILE_JSON"],
  bucket: bucket_name
}