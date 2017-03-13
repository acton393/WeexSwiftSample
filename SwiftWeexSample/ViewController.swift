//
//  ViewController.swift
//  SwiftWeexSample
//
//  Created by zifan.zx on 6/18/16.
//  Copyright © 2016 com.taobao.weex. All rights reserved.
//

import UIKit
import WeexSDK

class ViewController: UIViewController,UIGestureRecognizerDelegate {
    var instance:WXSDKInstance?;
    var weexView = UIView()
    var weexHeight:CGFloat?;
    var top:CGFloat?;
    var url:URL?;
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = UIColor.white
        self.navigationController?.setNavigationBarHidden(true, animated: false)
        self.navigationController?.interactivePopGestureRecognizer?.delegate = self;
        render()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    deinit {
        /*
         *http://stackoverflow.com/questions/31365097/can-i-print-function-type-in-swift
         *
         */
        print(#function)
        
        if instance != nil {
            instance!.destroy()
        }
        self.navigationController?.interactivePopGestureRecognizer?.delegate = nil;
    }
    
    func render(){
        if instance != nil {
            instance!.destroy()
        }
        weak var weakSelf = self;
        instance = WXSDKInstance();
        instance!.viewController = weakSelf
        let width = self.view.frame.size.width
        
        instance!.frame = CGRect(x: 0, y: 0, width: width, height: self.view.frame.size.height)
        
        instance?.onCreate = {
            (view:UIView?)-> Void in
            weakSelf!.weexView.removeFromSuperview()
            weakSelf!.weexView = view!;
            weakSelf!.view.addSubview((weakSelf?.weexView)!)
            UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf!.weexView)
        }
        
        instance?.onFailed = {
            (error:Error?)-> Void in
            
            print("faild at error: %@", error!)
        }
        
        instance?.renderFinish = {
            (view:UIView?)-> Void in
            print("render finish")
        }
        instance?.updateFinish = {
            (view:UIView?)-> Void in
            print("update finish")
        }
        
        instance!.render(with: url, options: ["bundleUrl":String.init(format: "file://%@/bundlejs/", Bundle.main.bundlePath)], data: nil)
    }


}

