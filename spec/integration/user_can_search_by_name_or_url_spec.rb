require 'rails_helper'

RSpec.feature "user can search by name or body" do
  scenario "user gets correct search results", js: true do
    create(:link, name: "super link")
    create(:link, name: "wowza link", url: 'http://www.kewlnewexampl.com')
    create(:link, name: "cronut")

    visit '/links'

    fill_in :search, with: "cro"

    expect(page).to have_content("cronut")
    expect(page).to_not have_content("super link")
    expect(page).to_not have_content("wowza link")

    fill_in :search, with: "kewl"

    expect(page).to have_content("wowza link")
    expect(page).to_not have_content("super link")
    expect(page).to_not have_content("cronut")
  end
end
