class SubscribersMailer < ApplicationMailer

  def new_subscriber(email)
    @email = email
    mail to: ENV['PRIMARY_EMAIL'], subject: 'You have a new subsriber to your mailing list'
  end
end
