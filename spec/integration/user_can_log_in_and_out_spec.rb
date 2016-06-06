require 'rails_helper'
RSpec.feature 'user creates an account' do
  scenario 'they successfully make an account' do
    visit '/'

    fill_in 'email', with: 'david@gmail.com'
    fill_in 'password', with: 'password'
    fill_in 'password_confirmation', with: 'password'

    click_on 'signup'

    expect(page).to have_content("Welcome david@gmail.com")
  end
end
