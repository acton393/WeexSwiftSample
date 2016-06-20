//
//  ViewController.swift
//  SwiftWeexSample
//
//  Created by zifan.zx on 6/18/16.
//  Copyright © 2016 com.taobao.weex. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var instance = WXSDKInstance()
    var weexView = UIView()
    var weexHeight:CGFloat = 1.0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.render()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    deinit {
        instance.destroyInstance()
    }
    
    func render(){
        instance.viewController = self
        let width = self.view.frame.size.width
        instance.frame = CGRectMake(self.view.frame.size.width-width, 0, width, weexHeight)
        instance.onCreate = {
            (view:UIView!)-> Void in
            self.weexView.removeFromSuperview()
            self.weexView = view;
            self.view.addSubview(self.weexView)
            UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, self.weexView)
        }
        instance.onFailed = {
            (error:NSError!)-> Void in
            
            print("faild at error: %@", error)
        }
        
        instance.renderFinish = {
            (view:UIView!)-> Void in
            print("render finish")
        }
        instance.updateFinish = {
            (view:UIView!)-> Void in
            print("update finish")
        }
        let url = String.init(format: "file://%@/hello.js", NSBundle.mainBundle().bundlePath)
        instance.renderWithURL(NSURL.init(string: url), options: NSDictionary.init(object: url, forKey:"bundleUrl") as [NSObject : AnyObject], data: nil)
    }


}

