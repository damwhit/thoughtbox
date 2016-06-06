require 'rails_helper'

RSpec.describe "PATCH /api/v1/links" do
  it "edits a link" do

    create(:link, url: 'http://www.builtincolorado.com/job')
    link1 = create(:link, url: "http://www.builtincolorado.com/job")

    expect(Link.all.count).to eq(2)

    patch "/api/v1/links/#{link1.id}?read=true"

    expect(response.status).to eq(204)
    expect(Link.last.read).to eq(true)

  end
end
