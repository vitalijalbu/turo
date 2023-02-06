import { forwardRef } from "react"
import { Card } from "reactstrap"
import typeList from '@/data/types.json';
import { useForm } from '@mantine/form';
import AddressField from "./address-field";

const SearchForm = () => { 
  const form = useForm({
    initialValues: {
      email: '',
      type: 'hotel'
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Card>
<div className="form-control-bg-light bg-mode border p-4 rounded-3">
  <div className="row g-4">
    {/* Nav tabs START */}
    <div className="col-lg-6">
      <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <div
          className="form-check form-check-inline active"
          id="cab-one-way-tab"
          data-bs-toggle="pill"
          data-bs-target="#cab-one-way"
          role="tab"
          aria-controls="cab-one-way"
          aria-selected="true"
        >
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadiocab1"
            defaultValue="option1"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="inlineRadiocab1">
            One Way
          </label>
        </div>
        <div
          className="form-check form-check-inline"
          id="cab-round-way-tab"
          data-bs-toggle="pill"
          data-bs-target="#cab-round-way"
          role="tab"
          aria-controls="cab-round-way"
          aria-selected="false"
        >
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadiocab2"
            defaultValue="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadiocab2">
            Round Trip
          </label>
        </div>
      </div>
    </div>
    {/* Nav tabs END */}
  </div>
  {/* Tab content START */}
  <div className="tab-content mt-0" id="pills-tabContent">
    {/* One way tab START */}
    <div
      className="tab-pane fade show active"
      id="cab-one-way"
      role="tabpanel"
      aria-labelledby="cab-one-way-tab"
    >
      <form className="row g-4 align-items-center">
        <div className="col-xl-10">
          <div className="row g-4">
            {/* Pickup */}
            <div className="col-md-6 col-xl-4">
              <div className="form-size-lg">
                <label className="form-label">Pickup</label>
                <select
                  className="form-select js-choice"
                  data-search-enabled="true"
                  aria-label=".form-select-sm"
                >
                  <option value="">Select location</option>
                  <option selected="">San Jacinto, USA</option>
                  <option>North Dakota, Canada</option>
                  <option>West Virginia, Paris</option>
                </select>
              </div>
            </div>
            {/* Drop */}
            <div className="col-md-6 col-xl-4">
              <div className="form-size-lg">
                <label className="form-label">Drop</label>
                <select
                  className="form-select js-choice"
                  data-search-enabled="true"
                  aria-label=".form-select-sm"
                >
                  <option value="">Select location</option>
                  <option>San Jacinto, USA</option>
                  <option selected="">North Dakota, Canada</option>
                  <option>West Virginia, Paris</option>
                </select>
              </div>
            </div>
            {/* Date */}
            <div className="col-md-6 col-xl-2">
              <label className="form-label">Pickup Date</label>
              <input
                type="text"
                className="form-control form-control-lg flatpickr"
                defaultValue="20 Nov"
                placeholder="Select date"
              />
            </div>
            {/* Time */}
            <div className="col-md-6 col-xl-2">
              <label className="form-label">Pickup time</label>
              <input
                type="text"
                className="form-control form-control-lg flatpickr"
                defaultValue="2:50 PM"
                data-enabletime="true"
                data-nocalendar="true"
                placeholder="Select time"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-2 d-grid mt-xl-auto">
          <a className="btn btn-lg btn-primary mb-0" href="#">
            Update
          </a>
        </div>
      </form>
    </div>
    {/* One way tab END */}
    {/* Round way tab END */}
    <div
      className="tab-pane fade"
      id="cab-round-way"
      role="tabpanel"
      aria-labelledby="cab-round-way-tab"
    >
      <form className="row g-4 align-items-center">
        <div className="col-xl-12">
          <div className="row g-4">
            {/* Leaving From */}
            <div className="col-md-6 col-xl-6">
              <div className="form-size-lg">
                <label className="form-label">Pickup</label>
                <select
                  className="form-select js-choice"
                  data-search-enabled="true"
                  aria-label=".form-select-sm"
                >
                  <option value="">Select location</option>
                  <option>New York</option>
                  <option>Canada</option>
                  <option>Paris</option>
                </select>
              </div>
            </div>
            {/* Going To */}
            <div className="col-md-6 col-xl-6">
              <div className="form-size-lg">
                <label className="form-label">Drop</label>
                <select
                  className="form-select js-choice"
                  data-search-enabled="true"
                  aria-label=".form-select-sm"
                >
                  <option value="">Select location</option>
                  <option>Canada</option>
                  <option>New York</option>
                  <option>Paris</option>
                </select>
              </div>
            </div>
            {/* Date */}
            <div className="col-md-6 col-xl-3">
              <label className="form-label">Pickup Date</label>
              <input
                type="text"
                className="form-control form-control-lg flatpickr"
                placeholder="Select date"
              />
            </div>
            {/* Time */}
            <div className="col-md-6 col-xl-3">
              <label className="form-label">Pickup time</label>
              <input
                type="text"
                className="form-control form-control-lg flatpickr"
                data-enabletime="true"
                data-nocalendar="true"
                placeholder="Select time"
              />
            </div>
            {/* Date */}
            <div className="col-md-6 col-xl-3">
              <label className="form-label">Return Date</label>
              <input
                type="text"
                className="form-control form-control-lg flatpickr"
                placeholder="Select date"
              />
            </div>
            {/* Time */}
            <div className="col-md-6 col-xl-3">
              <label className="form-label">Return time</label>
              <input
                type="text"
                className="form-control form-control-lg flatpickr"
                data-enabletime="true"
                data-nocalendar="true"
                placeholder="Select time"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <a className="btn btn-lg btn-primary w-100 mb-0" href="#">
            Update
          </a>
        </div>
      </form>
    </div>
    {/* Round way tab END */}
  </div>
  {/* Tab content END */}
</div>

    </Card>
  )
}
export default SearchForm;