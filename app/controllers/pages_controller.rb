class PagesController < ApplicationController
  def home
    @view = params[:view] || 'home'
  end

  # def resume

  # end

  # def portfolio
  # end

  # def blog
  # end

  # def contact
  # end
end
