import React from "react";
import { shallow } from "enzyme";
import { useDispatch, useSelector } from "react-redux";
import FlightSelection from "./FlightSelection";
import { fetchFlights } from "../../Redux/Actions/FlightActions";
import { ListItem, CircularProgress, Alert } from "@mui/material";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../Redux/Actions/FlightActions", () => ({
  fetchFlights: jest.fn(),
}));

describe("FlightSelection Component", () => {
  let wrapper;
  const mockDispatch = jest.fn();
  const mockFlights = [
    {
      id: 1,
      number: "AA123",
      destination: "New York",
      departureTime: "10:00 AM",
    },
    {
      id: 2,
      number: "BA456",
      destination: "London",
      departureTime: "12:00 PM",
    },
  ];
  const mockError = null;

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        flights: { flights: mockFlights, error: mockError },
      })
    );
    wrapper = shallow(<FlightSelection />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should dispatch fetchFlights on mount", () => {
    expect(mockDispatch).toHaveBeenCalledWith(fetchFlights());
  });

  it("should display a list of flights", () => {
    expect(wrapper.find(ListItem).length).toBe(mockFlights.length);
  });

  it("should display flight details when a flight is selected", () => {
    wrapper.find(ListItem).at(0).simulate("click");
    expect(wrapper.find("h3").text()).toEqual("Selected Flight Details");
    expect(wrapper.find("p").at(0).text()).toContain(mockFlights[0].number);
  });

  it("should display an error message if there is an error", () => {
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        flights: { flights: [], error: { message: "Error fetching flights" } },
      })
    );
    wrapper = shallow(<FlightSelection />);
    expect(wrapper.find(Alert).text()).toContain("Error fetching flights");
  });

  it("should show a loading spinner when flights are being fetched", () => {
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        flights: { flights: [], error: null },
      })
    );
    wrapper = shallow(<FlightSelection />);
    expect(wrapper.find(CircularProgress).exists()).toBe(true);
  });
});
