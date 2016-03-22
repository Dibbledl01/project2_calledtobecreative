class PagesController < ApplicationController
  def home
    render "home"
  end

  def attend
    render "attend"
  end

  def recommend
    render "recommend"
  end

  def be_inspired
    render "be_inspired"
  end
end
