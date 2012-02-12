class Address < ActiveRecord::Base
  def self.sync(urls)
    urls.each do |url|
      address = find_or_initialize_by_name(url)
      address.save if address.new_record?
    end
  end
end
