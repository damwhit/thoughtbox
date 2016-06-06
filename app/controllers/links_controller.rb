class LinksController < ApplicationController
  def index
    @link = Link.new
    @links = Link.all
  end

  def create
    link = Link.new(link_params)
    if link.save
      flash[:success] = "#{link.name} created!"
      redirect_to links_path
    else
      flash.now[:error] = 'InvalidURIError try again'
      @link = link
      render :index
    end
  end

  private
    def link_params
      params.require(:link).permit(:name, :url)
    end
end
