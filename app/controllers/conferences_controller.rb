class ConferencesController < ApplicationController
  # just remember to erase these comments after or change it to the correct controller
  # GET /posts
  # GET /posts.json
  def index
    @conferences = Conference.all
  end
end
