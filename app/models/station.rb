class Station < ApplicationRecord
  serialize :avg0, Array
  serialize :avg2, Array
  serialize :avg4, Array
  serialize :avg6, Array
  serialize :avg8, Array
  serialize :avg10, Array
  serialize :avg12, Array
  serialize :avg14, Array
  serialize :avg16, Array
  serialize :avg18, Array
  serialize :avg20, Array
  serialize :avg22, Array

  def compute_average(hour)
    data = self["#{hour}"]
    average = data.inject{ |sum, el| sum + el }.to_f / data.size
    average.round
  end
end
