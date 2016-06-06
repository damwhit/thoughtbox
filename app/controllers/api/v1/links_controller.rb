module Api
  module V1
    class LinksController < ApiController
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
