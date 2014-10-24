require 'json'
module WinkDex

  class Client
    include HTTParty

    base_uri "https://winkdex.com"

    def price
      response = self.class.get('/api/v0/price')
      return response
    end

  end
end
