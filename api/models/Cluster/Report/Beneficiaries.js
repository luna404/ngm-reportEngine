/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	// connection
	connection: 'ngmHealthClusterServer',

	// strict schema
	schema: true,

	// attributes
	attributes: {
		// region/country
    adminRpcode: {
			type: 'string',
			required: true
    },
    adminRname: {
			type: 'string',
			required: true
    },
    admin0pcode: {
			type: 'string',
			required: true
    },
    admin0name: {
			type: 'string',
			required: true
    },
		organization_id: {
			type: 'string',
			required: true
		},
		organization: {
			type: 'string',
			required: true
		},
		cluster_id: {
			type: 'string',
			required: true
		},
		cluster: {
			type: 'string',
			required: true
		},
		username: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true
		},

		// reference to location
			// this avoids unlinking when updating Report->Location 
		location_reference_id: {
			type: 'string'
		},

		// project
		project_id: {
			type: 'string',
			required: true
		},
		project_hrp_code: {
			type: 'string',
			required: true
		},
		project_status: {
			type: 'string',
			defaultsTo: 'new'
		},
		project_title: {
			type: 'string',
			required: true
		},
		project_description: {
			type: 'string',
			required: true
		},
		project_start_date: {
			type: 'date',
			required: true
		},
		project_end_date: {
			type: 'date',
			required: true
		},
		project_budget: {
			type: 'integer',
			required: true
		},
		project_budget_currency: {
			type: 'string',
			required: true
		},
		project_rnr_chapter: {
			type: 'boolean',
			defaultsTo: false
		},
		project_donor: {
			type: 'array'
		},

		// SOs
		strategic_objectives: {
			type: 'array'
		},

		// report
		report_id: {
			type: 'string',
			required: true
		},
		report_active: {
			type: 'boolean',
			defaultsTo: true
		},
		report_status: {
			type: 'string',
			defaultsTo: 'todo'
		},
		report_month: {
			type: 'integer',
			required: true
		},
		report_year: {
			type: 'integer',
			required: true
		},
		report_submitted: {
			type: 'date'
		},
		reporting_period: {
			type: 'date',
			required: true
		},
		reporting_due_date: {
			type: 'date',
			required: true
		},

		// category
		category_type_id: {
			type: 'string',
			required: true
		},
		category_type_name: {
			type: 'string',
			required: true
		},

		// beneficiary
		beneficiary_type_id: {
			type: 'string',
			required: true
		},
		beneficiary_type_name: {
			type: 'string',
			required: true
		},		

		// activity_type
		activity_type_id: {
			type: 'string',
			required: true
		},
		activity_type_name: {
			type: 'string',
			required: true
		},

		// activity_description
		activity_description_id: {
			type: 'string',
			required: true
		},
		activity_description_name: {
			type: 'string',
			required: true
		},

		// delivery (population, service)
		delivery_type_id: {
			type: 'string',
			required: true
		},
		delivery_type_name: {
			type: 'string',
			required: true
		},

		// indicator
		households:{
			type: 'integer',
			defaultsTo: 0
		},
		families: {
			type: 'integer',
			defaultsTo: 0
		},
		boys:{
			type: 'integer',
			defaultsTo: 0
		},
		girls:{
			type: 'integer',
			defaultsTo: 0
		},
		men:{
			type: 'integer',
			defaultsTo: 0
		},
		women:{
			type: 'integer',
			defaultsTo: 0
		},
		elderly_men:{
			type: 'integer',
			defaultsTo: 0
		},
		elderly_women:{
			type: 'integer',
			defaultsTo: 0
		},
		sessions:{
			type: 'integer',
			defaultsTo: 0
		},

		// add a reference to Location
    location_id: {
      model: 'location'
    },
		
		// location
		admin1pcode: {
			type: 'string',
			required: true
		},
		admin1name: {
			type: 'string',
			required: true
		},
		admin2pcode: {
			type: 'string',
			required: true
		},
		admin2name: {
			type: 'string',
			required: true
		},
		conflict: {
			type: 'boolean',
			required: true
		},
		fac_type: {
			type: 'string'
		},
		fac_type_name: {
			type: 'string'
		},
		fac_name: {
			type: 'string',
			required: true
		},
		admin1lng: {
			type: 'float',
			required: true
		},
		admin1lat: {
			type: 'float',
			required: true
		},
		admin2lng: {
			type: 'float',
			required: true
		},
		admin2lat: {
			type: 'float',
			required: true
		},






		/*********** 2016 *************/
		// Project details
		project_type: {
			type: 'array'
		},
		project_type_other: {
			type: 'string'
		},
		activity_type: {
			type: 'array'
		},
		activity_description: {
			type: 'array'
		},
		beneficiary_name: {
			type: 'string'
		},
		beneficiary_type: {
			type: 'string'
		},
		penta3_vacc_male_under1:{
			type: 'integer'
		},
		penta3_vacc_female_under1:{
			type: 'integer'
		},
		skilled_birth_attendant:{
			type: 'integer'
		},
		conflict_trauma_treated:{
			type: 'integer'
		},
		education_topic: {
			type: 'string'
		},		
		education_sessions:{
			type: 'integer'
		},
		education_male:{
			type: 'integer'
		},
		education_female:{
			type: 'integer'
		},
		training_topic: {
			type: 'string'
		},		
		training_sessions:{
			type: 'integer'
		},
		training_male:{
			type: 'integer'
		},
		training_female:{
			type: 'integer'
		}
		
	},

	// encrypt password before create, assign org_id
	beforeCreate: function ( b, next ) {

		// add reference for unlinked issue
		b.location_reference_id = b.location_id;
		next();

	}

};
