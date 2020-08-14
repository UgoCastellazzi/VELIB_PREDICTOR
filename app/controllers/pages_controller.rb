class PagesController < ApplicationController

  def home
    @stations = Station.all
    @markers = Station.all.map do |station|
      {
        lat: station.lat,
        lon: station.lon,
        capacity: station.capacity,
      }
    end
  end

end
