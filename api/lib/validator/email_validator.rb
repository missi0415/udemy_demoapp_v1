class EmailValidator < ActiveModel::EachValidator
  def validate_each(record,attribute,value)

    # text length
    max = 255
    record.errors.add(attribute, :too_long, count: max) if value.length > max
    # record.errors.add(属性, メッセージ) バリデーションエラーを発生させる

    # format … メールアドレスの書式チェック用正規表現。
    format = /\A\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\z/
    record.errors.add(attribute, :invalid) unless format =~ value
      #=~ … 文字列と正規表現が一致するかを判定するRubyの演算子。

    # uniqueness 一意性を保つバリデーション
    record.errors.add(attribute, :taken) if record.email_activated?
      #email_actived? 登録したメールアドレスと同じメールアドレスの認証済みユーザが既にいる場合、trueを返すメソッド

  end
end
