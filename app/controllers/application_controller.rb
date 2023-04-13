class ApplicationController < ActionController::API
    include ActionController::Cookies
    include SessionsHelper
    before_action :authenticate_user

    private

    def authenticate_user
        render json: "Not Authorized", status: :unauthorized unless current_user
    end
end
