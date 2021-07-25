class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authorize_request

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product, include: :reviews
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    @product.user = @current_user
    # @product.category = Category.find(params[:category_id])

    if @product.save
      render json: @product, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  def get_by_category
    @products = Product.where(category: params[:category_id])
    render json: @products
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:name, :description, :img_url, :category_id)
    end
end
