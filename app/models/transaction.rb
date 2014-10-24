class Transaction < ActiveRecord::Base
  # Remember to create a migration!
  validates :tx_hash, presence: true
  validates :tx_hash, uniqueness: true
  validates :bitcoin, numericality: {greater_than: 10000000}

  has_many :addresses
end
