FactoryGirl.define do
  factory :link do
    name "MyString"
    url "MyString"
    read false
  end
  factory :user do
    email ""
    password "password"
  end
end
