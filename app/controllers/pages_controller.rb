class PagesController < ApplicationController
  def home
    @view = params[:view] || 'home'
    raise unless @view == 'home'
  end

  # def about
  # end

  # def resume
  # end

  # def portfolio
  # end

  # def blog
  # end

  # def contact
  # end
end
