require 'rails_helper'
RSpec.feature 'user creates an account' do
  scenario 'they successfully make an account' do
    visit '/'

    fill_in 'user_email', with: 'david@gmail.com'
    fill_in 'user_password', with: 'password'
    fill_in 'user_password_confirmation', with: 'password'

    click_on 'signup'

    expect(page).to have_content("Welcome david@gmail.com")
  end
end
