class ConferencesController < ApplicationController

  # GET /posts
  # GET /posts.json
  def index
    @conferences = Conference.all
  end
end
