class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            @current_user = session[:user_id]
            render json: user, status: :ok
        else
            render json: {error: "Invalid Email or Password"}, status: :unprocessable_entity
        end
    end

    def destroy
        session[params[:user_id]] = nil
        render json: {success: 'Logged Out Successfully'}, status: :ok
    end
end
