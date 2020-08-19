class PagesController < ApplicationController

  def home
    @stations = Station.all
    @markers = Station.all.map do |station|
      {
        lat: station.lat,
        lon: station.lon,
        infoWindow: render_to_string(partial: "info_window", locals: { station: station }),
        capacity: station.capacity,
        current_avg0: station.current_avg0,
        current_avg2: station.current_avg2,
        current_avg4: station.current_avg4,
        current_avg6: station.current_avg6,
        current_avg8: station.current_avg8,
        current_avg10: station.current_avg10,
        current_avg12: station.current_avg12,
        current_avg14: station.current_avg14,
        current_avg16: station.current_avg16,
        current_avg18: station.current_avg18,
        current_avg20: station.current_avg20,
        current_avg22: station.current_avg22,
      }
    end
  end

end
