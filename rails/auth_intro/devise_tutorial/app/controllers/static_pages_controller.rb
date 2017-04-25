class StaticPagesController < ApplicationController
  def welcome
  end

  def support
  end

  def configure
  end

  def home
  end

  before_action :authenticate_user!, only: [:support]
  before_action :redirect_unless_admin, only: [:configure]


end
