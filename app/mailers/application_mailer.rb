class ApplicationMailer < ActionMailer::Base
  include SendGrid
  default from: ENV['PRIMARY_EMAIL']
  layout 'mailer'
end
