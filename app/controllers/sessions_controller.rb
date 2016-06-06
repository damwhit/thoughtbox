class SessionsController < ApplicationController
  def new

  end

  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:success] = "Welcome back, #{user.email}"
      redirect_to links_path
    else
      flash.now[:error] = "Something went wrong, please try again"
      render :new
    end
  end

  def destroy
    flash[:alert] = "goodbye #{current_user.email}"
    session.clear
    redirect_to root_path
  end
end
