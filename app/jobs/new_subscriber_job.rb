class NewSubscriberJob < ApplicationJob
  queue_as :default

  def perform(args)
    SubscribersMailer.new_subscriber(args[:email]).deliver
  end
end
