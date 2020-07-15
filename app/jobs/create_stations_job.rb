require 'json'
require 'open-uri'

class CreateStationsJob < ApplicationJob
  queue_as :default

  def perform(*args)
    url = 'https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_information.json'
    serialized_stations = open(url).read
    data = JSON.parse(serialized_stations)
    stations = data['data']['stations']
    stations.each do | station |
      Station.create (
        {
          station_id: station['station_id'],
          name: station['name'],
          lat: station['lat'],
          lon: station['lon'],
          capacity: station['capacity']
        }
      )
    end
    # Do something
  end
end
