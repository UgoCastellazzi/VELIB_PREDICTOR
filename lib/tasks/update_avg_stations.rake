require 'json'
require 'open-uri'

def update_avg(avg)
  url = 'https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json'
  serialized_stations = open(url).read
  data = JSON.parse(serialized_stations)
  stations = data['data']['stations']
  stations.each do | station |
    station_to_update = Station.find_by(station_id: station['station_id'])
    if station_to_update["#{avg}"].size > 14
      station_to_update["#{avg}"].shift
      station_to_update["#{avg}"] << station['num_bikes_available']
    else
      station_to_update["#{avg}"] << station['num_bikes_available']
    end
    station_to_update["current_#{avg}"] = station_to_update.compute_average("#{avg}")
    station_to_update.save
  end
end

desc "Update avg0 on all stations"
task :update_avg0 => :environment do
  update_avg("avg0")
end

desc "Update avg2 on all stations"
task :update_avg2 => :environment do
  update_avg("avg2")
end

desc "Update avg4 on all stations"
task :update_avg4 => :environment do
  update_avg("avg4")
end

desc "Update avg6 on all stations"
task :update_avg6 => :environment do
  update_avg("avg6")
end

desc "Update avg8 on all stations"
task :update_avg8 => :environment do
  update_avg("avg8")
end

desc "Update avg10 on all stations"
task :update_avg10 => :environment do
  update_avg("avg10")
end

desc "Update avg12 on all stations"
task :update_avg12 => :environment do
  update_avg("avg12")
end

desc "Update avg14 on all stations"
task :update_avg14 => :environment do
  update_avg("avg14")
end

desc "Update avg16 on all stations"
task :update_avg16 => :environment do
  update_avg("avg16")
end

desc "Update avg18 on all stations"
task :update_avg18 => :environment do
  update_avg("avg18")
end

desc "Update avg20 on all stations"
task :update_avg20 => :environment do
  update_avg("avg20")
end

desc "Update avg22 on all stations"
task :update_avg22 => :environment do
  update_avg("avg22")
end

