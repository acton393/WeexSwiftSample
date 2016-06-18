## WeexSwiftSample

#[Weex](https://github.com/alibaba/weex)


##[WeexOCSample](http://gw.alicdn.com/bao/uploaded/LB1yfvtKpXXXXXbXXXXXXXXXXXX.zip?spm=a219a.7629140.0.0.AymsNe&file=LB1yfvtKpXXXXXbXXXXXXXXXXXX.zip)


#### You must replace file in WeexSwiftSample/lib/WeexSDK.framework and then WeexSwiftSample project can run correctly

### How to  get WeexSDK.framework

- Download [Weex](http://gw.alicdn.com/bao/uploaded/LB14u_rKpXXXXaUXXXXXXXXXXXX.zip?spm=a219a.7629140.0.0.Y28vYL&file=LB14u_rKpXXXXaUXXXXXXXXXXXX.zip) SDK  or <a href="#compile">compile</a> from Weex source [here](https://github.com/alibaba/weex)
 
### How to compile Weex SDK from Source
- clone [Weex](https://github.com/alibaba/weex) project  
  you can use SSH
  
	```
	git clone git@github.com:alibaba/weex.git
	```
  or use https   
  
	```
	git clone https://github.com/alibaba/weex.git
	```
  	    
- open WeexSDK.xcodeproj in `weex/ios/sdk`  
  switch target just below  
  ![img](http://img1.tbcdn.cn/L1/461/1/4fe050b36e7fea52f121e73790b1fdb7ea934e97)
  
- Build this project or use the xcode default hot key `⌘ + b`

### <p name="compile">You can build your own Weex SDK after modifying</p]>


- reference	 
 [Swift and Objective-C in the Same Project](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html)