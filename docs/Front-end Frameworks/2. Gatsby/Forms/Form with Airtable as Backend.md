### Install the airtable gem
```
	npm i airtable
```

### Usage
    
```bash

import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

export default function SiteVisit({
	setSiteFormShow,
	siteFormShow,
	projectName,
}) {
	const handleSiteFormClose = () => setSiteFormShow(false)

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("")
	const [selectedPurpose, setSelectedPurpose] = useState("")
	const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
	const [selectedDate, setSelectedDate] = useState("")
	const submitFormData = () => {
		const formData = {
			Name: name,
			Email: email,
			Category: selectedCategory,
			Purpose: selectedPurpose,
			Project: projectName,
			TimeSlot: selectedTimeSlot,
			Date: selectedDate,
		}

		const Airtable = require("airtable")
		const base = new Airtable({ apiKey: "mykey" }).base(
			"mybaseid"
		) //change both the api key and baseid refer <https://airtable.com/api>
		const table = base("Site Visits") //use you table name inside that base
		table.create(
			[
				{
					fields: {
						Name: name,
						Email: email,
						Category: selectedCategory,
						Purpose: selectedPurpose,
						Project: projectName,
						TimeSlot: selectedTimeSlot,
						Date: selectedDate,
					},
				},
			],
			function (err, records) {
				if (err) {
					console.error(err)
				}
			}
		)
		handleSiteFormClose()
	}
	return (
		<div>
			<Modal show={siteFormShow} onHide={handleSiteFormClose}>
				<Modal.Header closeButton>
					<Modal.Title>Interested in {projectName}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form noValidate>
						<Form.Group controlId="formBasicText">
							<Form.Label>Please enter your Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Full Name"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Your email id</Form.Label>
							<Form.Control
								type="email"
								placeholder="info@homzhub.com"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicDropdown">
							<Form.Label>Choose your configuration</Form.Label>
							<Form.Control
								as="select"
								value={selectedCategory}
								onChange={e => setSelectedCategory(e.target.value)}
							>
								<option> </option>
								<option>1 BHK</option>
								<option>2 BHK</option>
								<option>3 BHK</option>
								<option>4+ BHK</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="formBasicDropdown">
							<Form.Label>Purpose</Form.Label>
							<Form.Control
								as="select"
								value={selectedPurpose}
								onChange={e => setSelectedPurpose(e.target.value)}
							>
								<option> </option>
								<option>End use</option>
								<option>Investment</option>
							</Form.Control>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleSiteFormClose}>
						Close
					</Button>
					<Button variant="primary" onClick={submitFormData}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
```


---

## Create a Node

### In `gatsby-node.js`

```bash
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(async resolve => {
	const result = await graphql(`
	  {
		allAirtable(filter: { data: { BoxName: { ne: null } } }) {
		  edges {
			node {
			  recordId
			  id
							slug
			}
		  }
		}
	  }
	`)
	// For each path, create page and choose a template.
	// values in context Object are available in that page's query
	result.data.allAirtable.edges.forEach(({ node }) => {
	  createPage({
		path: `/${node.slug}`,
		component: path.resolve(`./src/template/product.js`),
		context: {
		  RecordID: node.recordId,
		},
	  })
	})
	resolve()
  })
}
```

###  in the template `post.js`

```jsx
import React from "react"
import { graphql } from "gatsby"

const ProductPage = ({
	data: {
		airtable: { data },
	},
}) => {
	return (
		<div>
			<h1>{data.BoxAdditional}</h1>
		</div>
	)
}

export const query = graphql`
	query ProductPageQuery($RecordID: String!) {
		airtable(recordId: { eq: $RecordID }) {
			data {
				BoxAdditional
				BoxName
			}
			id
		}
	}
`

export default ProductPage
```