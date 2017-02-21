class SubsribersMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.subsribers_mailer.new_subsriber.subject
  #
  def new_subscriber(email)
    @email = email
    mail to: ENV['PRIMARY_EMAIL'], subject: 'You have a new subsriber to your mailing list'
  end
end
