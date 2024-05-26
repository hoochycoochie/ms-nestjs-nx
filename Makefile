
gateway:
	clear && nx run gateway:serve

admin:
	nx run gateway:serve
rename:
	nx g @nx/workspace:move --projectName medsen --destination apps/gateway --newProjectName gateway


all:
	nx run-many -t serve -p gateway product

containers:
	cd db/ && make up && cd ../redis && make up && cd ../

library:
	nx @nrwl/nest:library 
newapp:
	nx g @nx/nest:app portal
