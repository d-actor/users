class UsersController < ApplicationController
  def index
  end

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render_error(@user)
    end
  end

  def new
    @user = User.new
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render_error(@user)
    end
  end

  def destroy
    name = "#{@user.first_name} + #{@user.last_name}"
    @user.destroy
    render json: { message: "User #{name} Deleted"}
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :phone_number)
  end
end
