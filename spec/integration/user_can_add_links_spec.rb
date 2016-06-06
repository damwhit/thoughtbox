require 'rails_helper'
RSpec.feature "user can add links" do
  scenario "user cannot add invalid uri" do
    visit '/links'

    expect(page).to_not have_content("all of the things")

    fill_in :link_name, with: "all of the things"
    fill_in :link_url, with: "newlink.david.com"

    click_on "save"

    expect(page).to have_content("InvalidURIError try again")

  end
  scenario "user can add valid uri" do
    visit '/links'

    expect(page).to_not have_content("all of the things")

    fill_in :link_name, with: "all of the things"
    fill_in :link_url, with: "https://github.com/perfectline/validates_url"

    click_on "save"

    expect(page).to have_content("all of the things created!")

  end
end
