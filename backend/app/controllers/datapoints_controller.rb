class DatapointsController < ApplicationController
  before_action :set_datapoint, only: [:show, :update, :destroy]

  # GET /datapoints
  # GET /datapoints.json
  def index
    @datapoints = Datapoint.all

    render json: @datapoints
  end

  # GET /datapoints/1
  # GET /datapoints/1.json
  def show
    render json: @datapoint
  end

  # POST /datapoints
  # POST /datapoints.json
  def create
    @datapoint = Datapoint.new(datapoint_params)

    if @datapoint.save
      render json: @datapoint, status: :created, location: @datapoint
    else
      render json: @datapoint.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /datapoints/1
  # PATCH/PUT /datapoints/1.json
  def update
    @datapoint = Datapoint.find(params[:id])

    if @datapoint.update(datapoint_params)
      head :no_content
    else
      render json: @datapoint.errors, status: :unprocessable_entity
    end
  end

  # DELETE /datapoints/1
  # DELETE /datapoints/1.json
  def destroy
    @datapoint.destroy

    head :no_content
  end

  private

    def set_datapoint
      @datapoint = Datapoint.find(params[:id])
    end

    def datapoint_params
      params.require(:datapoint).permit(:domain, :time, :delay)
    end
end
