ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

# gem "minitest-reporters" setup
require "minitest/reporters"
Minitest::Reporters.use!

class ActiveSupport::TestCase
  # プロセスが分岐した直後に呼び出し
  parallelize_setup do |worker|
    load "#{Rails.root}/db/seeds.rb"
  end

  parallelize(workers: :number_of_processors)

  def active_user
    User.find_by(activated: true)
  end  

  # 削除
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  # fixtures :all
  # yml形式で書くのが手間なのでseedを読み込む手法を取る
end
