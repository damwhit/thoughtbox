FactoryGirl.define do
  factory :link do
    name "MyString"
    url "http://www.example.com"
    read false
  end
  factory :user do
    email ""
    password "password"
  end
end
