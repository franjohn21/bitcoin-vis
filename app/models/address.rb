class Address < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :transaction
end
