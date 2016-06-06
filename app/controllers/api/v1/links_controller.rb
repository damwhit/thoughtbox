module Api
  module V1
    class LinksController < ApiController
      def index
        require "pry"; binding.pry
        if params[:search]
          term = params[:search].try(:downcase)
          respond_with Link.where("LOWER(name) LIKE :term OR LOWER(url) LIKE :term", term: "%#{term}%")
        elsif params[:status]
          respond_with Link.where(read: params[:status])
        elsif params[:status]
          respond_with Link.where(created_at: :desc)
        end
      end

      def update
        link = Link.find(params[:id]).update(link_params)
        respond_with link, location: nil
      end

      private
        def link_params
          params.permit(:name, :url, :read)
        end
    end
  end
end
