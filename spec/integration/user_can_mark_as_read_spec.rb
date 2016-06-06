require 'rails_helper'

RSpec.feature "user can change link read" do
  scenario "user ups or down votes links", js: true do

    link1 = create(:link, read: false, url: 'http://www.example.com')

    visit '/links'

    expect(page).to have_content("read")

    find(".change").click

    expect(page).to have_content("unread")

    find(".change").click

    expect(page).to have_content("read")
  end
end
