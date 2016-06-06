module Api
  module V1
    class LinksController < ApiController
      def index
        if params[:search]
          term = params[:search].try(:downcase)
          respond_with Link.where("LOWER(name) LIKE :term OR LOWER(url) LIKE :term", term: "%#{term}%")
        else
          respond_with Link.order(created_at: :desc)
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
