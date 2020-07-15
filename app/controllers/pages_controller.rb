class PagesController < ApplicationController

  def home
    @markers = Station.all.map do |station|
      {
        lat: station.lat,
        lon: station.lon
      }
    end
  end

end
