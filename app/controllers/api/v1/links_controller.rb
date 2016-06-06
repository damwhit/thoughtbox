module Api
  module V1
    class LinksController < ApiController
      def index
        if params[:search]
          term = params[:search].try(:downcase)
          respond_with Link.where("LOWER(name) LIKE :term OR LOWER(url) LIKE :term", term: "%#{term}%")
        elsif params[:status]
          respond_with Link.where(read: params[:status])
        elsif params[:sort] == 'true'
          respond_with Link.order(name: :asc)
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
