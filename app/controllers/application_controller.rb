class ApplicationController < ActionController::Base
  # TODO: uncomment this line to protect from CSRF
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    token = @current_user.reset_session_token!
    session[:session_token] = token
  end

  def logout!
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
end
