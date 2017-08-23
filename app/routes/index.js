var users = require('../controllers/users.js');
    inventory = require('../controllers/inventory.js');
    imports = require('../controllers/imports.js');
    enquiries = require('../controllers/enquiries.js');
    customers = require('../controllers/customers.js');
    statistics = require('../controllers/statistics.js');
    projects = require('../controllers/projects.js');



module.exports = function(app){

	app.get('/uploads',function(req,res){
		res.render('upload');
	});
	app.post('/uploads',inventory.addSupplierInventory);

	app.get('/',inventory.welcome);
    
    app.get('/users',users.getUsers);
    app.post('/getSingleUser',users.getUser);//users?userid='id'
    app.post('/users',users.registerUser);
    app.post('/signin',users.signIn);
    app.post('/admin',users.adminSignin);
    
	app.get('/inventory',inventory.getData);
	app.post('/inv',inventory.getInvData);
    //app.get('/inv',inventory.getInvData);
	app.post('/inventory',inventory.addInventory);
    app.post('/updateInventory',inventory.updateInventory);
	app.get('/suppliers',inventory.getSuppliers);
	app.post('/supplierInventory',inventory.getSupplier);
    app.get('/supplierCategories',inventory.getSupplierCategories);
    app.post('/supplierCategory',inventory.addSuppCategory);

    app.post('/suppliersByCategory',inventory.suppliersByCategory);
	app.post('/supplier',inventory.addSupplier);
	app.get('/makes',inventory.getallMakes);
    app.post('/invByMake',inventory.getByMake);

    app.post('/byStatus',inventory.getByStatus);

    app.post('/invByMakeModel',inventory.getByMakeModel);

	app.get('/getSuppliersInventory',inventory.getSuppliersInventory);
	app.post('/addSupplierInventory',inventory.addSupplierInventory);

    app.get('/importers',imports.getImporters);
	app.post('/importer',imports.addImporter);

    app.get('/imports',imports.getAllImports);
	app.post('/import',imports.addImport);
	app.post('/updateImport',imports.updateImport);
	app.get('/importsByStatus',imports.getImportsByStatus); //importsByStatus?status=cleared Or Commited
	app.post('/clearImport',imports.clearImport);
	app.post('/importStatus',imports.importStatusUpdate);

    app.get('/customers',customers.getCustomers);
    app.get('/customer',customers.getCustomer);
	app.post('/customers',customers.addCustomer);

	app.get('/enquiries',enquiries.getEnquiries);
	app.post('/getEnquiry',enquiries.getEnquiry);// enquiry?id='enquiry.id'
    app.post('/enquiry',enquiries.addEnquiries);
    app.post('/userEnquiries',enquiries.getUserEnquiries);//userEnquiries?='user.id'
    app.get('/customerEnquiries',enquiries.getCustomerEnquiries);
    app.post('/updateEnqStatus',enquiries.updateEnqStatus);

    app.post('/updateEnq',enquiries.updateEnq);

    app.get('/clients',enquiries.getClients);
    app.post('/addClients',enquiries.addClients);
    app.get('/stats',inventory.statistics);


    app.get('/inventoryCount',statistics.inventoryCount);
    app.get('/s_inventoryCount',statistics.s_inventoryCount);
    app.get('/suppliersCount',statistics.suppliersCount);
    app.get('/importersCount',statistics.importersCount);
    app.get('/importsCount',statistics.importsCount);
    app.get('/enquiriesCount',statistics.enquiriesCount);

    app.get('/enquiriesHotCount',statistics.enquiriesHotCount);
    app.get('/enquiriesColdCount',statistics.enquiriesColdCount);
    app.get('/enquiriesMediumCount',statistics.enquiriesMediumCount);
    app.get('/clientsCount',statistics.clientsCount);

    app.post('/events',projects.getEvents);
    app.post('/createEvent',projects.createEvent);

    app.post('/projects',projects.getProjects);
    app.post('/createProject',projects.createProject);

    app.post('/tasks',projects.getTasks);
    app.post('/createTask',projects.createTask);
    
    app.post('/milestones',projects.getMilestones);
    app.post('/createMilestone',projects.createMilestone);

    app.post('/registerAdmin',users.regAdmin);
    
    app.get('/reservedCars',inventory.getReservedCars);
    app.post('/reserve',inventory.reserve);
    app.post('/reserveComments',inventory.reserveComments);

    app.post('/sold',inventory.sold);
    app.get('/soldCars',inventory.getSoldCars);

    app.get('/carsReturnedToSupp',inventory.carsReturnedToSupp);
    app.post('/returnToSupp',inventory.returnedToSupplier);
    app.post('/returnComments',inventory.returnComments);

    app.post('/carFeatures',inventory.updateFeatures);
    app.post('/inventoryImgUpdate',inventory.updateImage);

    app.get('/availableCars',inventory.getAvailableCars);
    app.post('/deleteCar',inventory.deleteCar);
    app.post('/carNowAvailable',inventory.makeAvailableAgain);
    app.post('/deleteSuppCategories',inventory.deleteSuppCategories);
    
    app.get('/suppInv',inventory.suppInventory);
    app.post('/singleSuppInv',inventory.singleSuppInv);
    app.get('/gigiSuppInv',inventory.gigiSuppInv);
    app.post('/invByMakeSupp',inventory.invByMakeSupp);
}
