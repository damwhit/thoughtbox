require 'rails_helper'

RSpec.feature "user can filter by read status" do
  scenario "user gets filtered results", js: true do
    create(:link, name: "super link", read: true)
    create(:link, name: "wowza link", url: 'http://www.kewlnewexampl.com')
    create(:link, name: "cronut")

    visit '/links'

    find('#read').click

    expect(page).to have_content("super link")
    expect(page).to_not have_content("cronut")
    expect(page).to_not have_content("wowza link")

    find('#unread').click

    expect(page).to_not have_content("super link")
    expect(page).to have_content("cronut")
    expect(page).to have_content("wowza link")

  end
  scenario "user gets alphabatized results", js: true do
    create(:link, name: "super link", read: true)
    create(:link, name: "wowza link", url: 'http://www.kewlnewexampl.com')
    create(:link, name: "cronut")

    visit '/links'

    find('.sort').click

    expect(page).to have_content("super link")
    expect(page).to have_content("cronut")
    expect(page).to have_content("wowza link")
  end
end
