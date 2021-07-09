class User < ApplicationRecord

  # gem bcrypt のメソッド
  # password_digestというカラムに保存されるため、同一名称のカラムを用意しておく
  has_secure_password

  validates :name,  presence: true,
                    length: { maximum: 30,allow_blank: true}

  VALID_PASSWORD_REGEX = /\A[\w\-]+\z/
  validates :password, presence: true,
                        length: { minimum: 8 },
                        format: {
                          with: VALID_PASSWORD_REGEX,
                          message: :invalid_password #ja.ymlの値を出力
                        },
                        allow_nil: true
  validates :activated, inclusion: { in: [ true, false] }
end
